const hostname = process.env.APP_HOSTNAME;

const generateEmailHTML = (name: string, email: string): string => {
	return `<div style="margin-inline: auto; padding: 20px">
            <h1
                style="
                    font-size: 24px;
                    width: fit-content;
                    margin-inline: auto;
                    margin-bottom: 16px;
                ">
                Hi ${name}!
            </h1>
            <p
                style="
                    width: fit-content;
                    margin-inline: auto;
                    font-size: 18px;
                    margin-bottom: 16px;
                ">
                This in only test message. No more emails will be send to you.
            </p>
            <a href="${hostname}/unsign?email=${email}" style="width: fit-content; margin-inline: auto; display: block"
                >To unsign from our database click here!
            </a>
        </div>
        `;
};

export default generateEmailHTML;
