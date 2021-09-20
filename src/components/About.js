import React from 'react'
import Ricky from '../img/ricky.jpg'

export default function About() {
    return (
        <section id="about">
            <div className="">
                <div className="">

                    <h1 className="">
                        Hi, I'm Ricky
                        <br />
                        I love to build amazing web apps
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                        laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                        Laborum, voluptas natus?
                    </p>

                    <div>
                        <a href="#">
                            Working with me
                        </a>
                        <a href="#">
                            See my past works
                        </a>
                    </div>
                </div>

                <div className="max-w-">
                    <img
                        src={Ricky}
                        alt="ricky's photo"
                    />
                </div>
            </div>
        </section>
    );
}