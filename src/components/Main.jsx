import React from 'react';
import Button from './Button';
import { mdiYoutube } from '@mdi/js';
import { mdiSend } from '@mdi/js';
import { mdiGithub } from '@mdi/js';

const Main = () => {
    // let githubSvg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    // let youtubeSvg = <svg xmlns="http://www.w3.org/2000/svg" width="160" height="120"><path d="m154 17.5c-1.82-6.73-7.07-12-13.8-13.8-9.04-3.49-96.6-5.2-122 0.1-6.73 1.82-12 7.07-13.8 13.8-4.08 17.9-4.39 56.6 0.1 74.9 1.82 6.73 7.07 12 13.8 13.8 17.9 4.12 103 4.7 122 0 6.73-1.82 12-7.07 13.8-13.8 4.35-19.5 4.66-55.8-0.1-75z" fill="#f00"/><path d="m105 55-40.8-23.4v46.8z" fill="#fff"/><deepl-alert xmlns=""/><deepl-alert xmlns=""/><deepl-alert xmlns=""/></svg>
    // let vkSvg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="st0" d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"/></svg>
    return (
        <div className='content'>
            <div className='content-bordered'>
                <div className="description">
                    <h1>About me:</h1>
                    <ul className='facts'>
                        <li>Name: Ilia</li>
                        <li>Age: 17</li>
                        <li>City: Russia, Stavropol</li>
                        <li>Technologies: html, css, javascript, react</li>
                        <li>Trying: Web-design :)</li>
                    </ul>
                    <h1>My links:</h1>
                    <div className="links-list">
                        <ul className='center-list'>
                            <li><Button name="Vk" url="https://vk.com/winglessqwe" bcolor="blue" path={mdiSend}/></li>
                            <li><Button name="Youtube" url="https://www.youtube.com/channel/UCfFdcbr57tgpjfVrtlNJSVg" bcolor="red" path={mdiYoutube}/></li>
                            <li><Button name="Github" url="https://github.com/Wingleszy" bcolor="black" path={mdiGithub}/></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;