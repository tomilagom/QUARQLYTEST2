import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
 <div data-netlify-identity-menu></div>
          <a class="netlify-identity-button" href="#">Log in</a>
        <div data-netlify-identity-button>Login with Netlify Identity</div>
        <div class="multiple-buttons"><span class="label">Multiple buttons example:</span><div data-netlify-identity-menu=""><ul class="netlify-identity-menu"><li class="netlify-identity-item"><a class="netlify-identity-signup" href="#">Sign up</a></li><li class="netlify-identity-item"><a class="netlify-identity-login" href="#">Log in</a></li></ul></div></div>`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});