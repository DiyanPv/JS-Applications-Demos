import { register } from "../api/api.js";
import { html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs"
const registerTemplate = () => html`
<body>
    <meta charset="utf-8">

    <title>Login</title>

    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">

    <!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->


    <div class="container">

        <div id="login">

            <form action="javascript:void(0);" method="get">

                <fieldset class="clearfix">

                    <p><span class="fontawesome-user"></span><input type="text" id="email" value="Username" name="email"
                            onblur="if(this.value == '') this.value = 'Username'"
                            onfocus="if(this.value == 'Username') this.value = ''" required=""></p>
                    <!-- JS because of IE support; better: placeholder="Username" -->
                    <p id="password"><span class="fontawesome-lock"></span><input type="password" name="pass"
                            value="Password" onblur="if(this.value == '') this.value = 'Password'"
                            onfocus="if(this.value == 'Password') this.value = ''" required=""></p>
                    <!-- JS because of IE support; better: placeholder="Password" -->
                    <p><input type="submit" value="Sign Up"></p>

                </fieldset>

            </form>

        </div> <!-- end login -->

    </div>

</body>
`

let em = document.getElementById(`email`);
export const renderRegister = (ctx) => {
    ctx.render(registerTemplate());
    document.querySelector(`form`).addEventListener(`submit`, async (e) => {
        let newform = new FormData(e.currentTarget);
        let email = newform.get(`email`);
        let pass = newform.get(`pass`);
        await register(email, pass)
        page.redirect(`/`)
    })

}

