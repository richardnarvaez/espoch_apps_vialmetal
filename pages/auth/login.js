import { getSession, providers, signIn } from 'next-auth/client'

export default function SignIn({ providers }) {
   return (
      <div className="body-home" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
         {/* <h1>Inicio de secion </h1> */}
         <div className=" w3l-login-form">
            <h2>Inicio</h2>
            <div>
               <div className=" w3l-form-group">
                  <div className="group">
                     <i className="fas fa-user"></i>
                     <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        required="required"
                     />
                  </div>
               </div>

               <button type="submit">inicio</button>
               {/* <div class=" w3l-form-group">
                     <label>Contraseña:</label>
                     <div class="group">
                        <i class="fas fa-unlock"></i>
                        <input
                           type="password"
                           class="form-control"
                           placeholder="Password"
                           required="required"
                        />
                     </div>
                  </div> */}
               <div class="separation">
                  <div class="b"></div>
                  <p>o inicia sesión con</p>
                  <div class="a"></div>
               </div>
               {Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                     <button onClick={() => signIn(provider.id)}>
                      {provider.name}
                     </button>
                  </div>
               ))}
            </div>
            <p class=" w3l-register-p">
               Usted no tiene una cuenta de Google | <p> </p>
               <a href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount%3Fnc%3D1&hl=Es&flowName=GlifWebSignIn&flowEntry=SignUp" class="register">
                  Registrese
               </a>
            </p>
         </div>
         <footer style={{ background: 'linear-gradient(0deg, black, transparent)' }}>
            <p class="copyright-agileinfo">©2021 | Derechos resevados</p>
         </footer>
      </div>
   )
}

SignIn.getInitialProps = async (context) => {
   const { req, res } = context
   const session = await getSession({ req })
   if (session && res && session.accessToken) {
      res.writeHead(302, {
         Location: '/',
      })
      res.end()
      return
   }
   return {
      providers: await providers(context),
      //  csrfToken: await csrfToken(context),
   }
}
