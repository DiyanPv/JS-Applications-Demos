import { login } from "../api/api.js";
import { html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs"




const loginTemplate = () => html`
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

                    <p id="email"><span class="fontawesome-user"></span><input type="text" name="email" value="Username"
                            onblur="if(this.value == '') this.value = 'Username'"
                            onfocus="if(this.value == 'Username') this.value = ''" required=""></p>
                    <!-- JS because of IE support; better: placeholder="Username" -->
                    <p id="password"><span class="fontawesome-lock"></span><input type="password" name="pass"
                            value="Password" onblur="if(this.value == '') this.value = 'Password'"
                            onfocus="if(this.value == 'Password') this.value = ''" required=""></p>
                    <!-- JS because of IE support; better: placeholder="Password" -->
                    <p><input type="submit" value="Sign In"></p>

                </fieldset>

            </form>

            <p>Not a member? <a href="/register">Sign up now</a><span class="fontawesome-arrow-right"></span></p>

        </div> <!-- end login -->

    </div>

</body>
`


export const renderLogin = (ctx) => {
    ctx.render(loginTemplate())
    document.querySelector(`form`).addEventListener(`submit`, async (e) => {
        let newform = new FormData(e.currentTarget);
        let email = newform.get(`email`);
        let pass = newform.get(`pass`);
        await login(email, pass).then(res => res.json())
        page.redirect(`/`)
    })
}

