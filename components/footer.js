function Footer() {
    return <>
            <footer>
                <span>
                    <h2>About</h2>
                <article>
                    
                    <b>Diaz web app</b>
                    <p>
                        Plataforma dedicada al desarrollo de software, para gestionar e impulsar todo tipo de emprendimiento, negocios y empresas a travez del desarrollo técnologico.
                    </p>

                    <b>contácto</b>
                    <ul className="tecnologies" >
                        <li>
                            <button>
                                facebook
                            </button>
                        </li>
                        <li>
                            <button>
                                instagram
                            </button>
                        </li>
                        <li>
                            <button>
                                gmail
                            </button>
                        </li>
                        <li>
                            <button>
                                twitter
                            </button>
                        </li>
                    </ul>
                </article>
                
                <article>
                    <b>Erick Díaz</b>
                    <p>
                         Emprendedor, desarrollador de software y administrador de sistemas. Fundador y representante de la plataforma <b>Diaz web app</b>
                    </p>

                    <b>contácto</b>

                    <ul className="tecnologies">
                        <li>
                            <button>
                                facebook
                            </button>
                        </li>
                        <li>
                            <button>
                                instagram
                            </button>
                        </li>
                        <li>
                            <button>
                                gmail
                            </button>
                        </li>
                    </ul>
                </article>
                </span>
            </footer>
            <style>
                {
                    `
                    footer{
                        grid-column: 1 / span 16;
                    }
                    footer span{
                        grid-column: 2 / span 14;
                        display:flex;
                        flex-flow:column;
                        justify-content:space-between;
                    }
                    footer span h2{
                        width:100%;
                        text-align:center;
                        line-height:2;
                    }
                    footer span article b{
                        width:100%;
                        text-align:center;
                    }
                    footer span article p{
                        padding:2vmin;
                    }
                    footer span article{
                        width:99%;
                    }
                    @media (min-width:512px){
                        footer span{
                            flex-flow:row wrap;
                        }
                        footer span article{
                            width:48%;
                        }
                    }
                    `
                }
            </style>
        </>
}

export {Footer}