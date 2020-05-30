.SILENT:

DATE = `date +'%Y-%m-%d %H:%M:%S'`

MSG = Hi, I'm auto-generated. \
	I was too lazy to write a message :)

resume:
	wget --no-check-certificate -r \
	'https://drive.google.com/uc?export=download&id=14wVa6gwcjU1ZlMYS0Qf1Tii8mWchhY58' \
	-O ./public/Henry_Trinh_Resume1.pdf

	cmp ./public/Henry_Trinh_Resume1.pdf ./public/Henry_Trinh_Resume.pdf > /dev/null 2>&1; \
	if [ $$? -eq 1 ]; then \
		rm -f ./public/Henry_Trinh_Resume.pdf; \
		mv ./public/Henry_Trinh_Resume1.pdf ./public/Henry_Trinh_Resume.pdf; \
		git add .; \
		git commit -m "new fuckin resume yuH yEET `date +'%Y-%m-%d %H:%M:%S'`"; \
		git push; \
		yarn build; \
		firebase deploy; \
	else \
		rm -f ./public/Henry_Trinh_Resume1.pdf; \
		echo no changes ; \
	fi

update:
	git diff --quiet > /dev/null 2>&1; \
	if [ $$? -eq 1 ]; then \
		git add .; \
		git commit -m "$(DATE) $(MSG)"; \
		git push; \
		yarn build; \
		firebase deploy; \
	else \
		echo No changes you fool; \
	fi