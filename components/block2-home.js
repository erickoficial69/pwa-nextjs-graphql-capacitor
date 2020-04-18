
function Block2() {
  return <>
  <ul className='block2'>
        <article>
            <h2>Web apps</h2>
            <img style={{ width: '90%', maxWidth: '100vmin', }} src='/img/webResponsive.gif' alt="frontend apps" />
            <br/><br/>
            <p>
              Desarrollamos plataformas web para particulares y comercios con tecnologías como <b>progressive web apps (pwa) y webasembly (wassm)</b>
            </p>
        </article> 
        <article>
            <h2>Movil apps</h2>
            <img style={{ width: '90%', maxWidth: '100vmin', }} src='/img/movilapp.gif' alt="devOps" />
            <p>
              Desarrollamos aplicaciones moviles particulares y comercios con tecnología de punta y el mejor rendimiento del mercado.
            </p>
        </article>
        <article>
            <h2>Servicios devOps</h2>
            <img style={{ width: '90%', maxWidth: '100vmin', }} src='/img/support.gif' alt="devOps" />
            <p>
              Manten en linea, protege la base de datos, gana rendimiento, crea respaldos despliega y actualiza continuamente tu aplicación en nuestros cloud servers.
            </p>
        </article>
      </ul>
        <style>
           { `
            .block2{
                grid-column: 1 / span 16 ;
                background-image:url(/img/codes-white.jpg);
                background-size:cover;
                background-attachment:fixed;
                grid-gap:7vmin;
                padding:0 5vmin;
                display:grid;
                grid-template-columns:repeat(1,1fr);
                animation: intro1 3s cubic-bezier(0.215, 0.610, 0.355, 1);
                align-content:center;
                align-items:center;
              }
              .block2 article{
                background:white;
                border-radius:5px;
                box-shadow:0px 0px 1px grey;
                padding:2vmin;
              }
              .block2 article h2{
                  text-align:center;
                  line-height:2;
              }
              .block2 article img{
                margin-bottom:3vmin;
            }
            
              @media (min-width:512px){
                  .block2{
                    grid-template-columns:repeat(2,1fr);
                  }
              }
              @media (min-width:755px){
                .block2{
                    grid-template-columns:repeat(3,1fr);
                }
            }
            `}
      </style>
  </>
              
}

export default Block2
