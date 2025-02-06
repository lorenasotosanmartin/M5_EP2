import ServiceList from "../components/ServiceList";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Profiler, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    const ref = useRef();

    function scroll() {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });;
    }

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('src/public/services.json')
            .then((response) => response.json())
            .then((services) => {
                setServices((services.servicies).filter((service) => service.destacado === true));
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <main>
            <Header/>
            <section className="section_primary">
                <div className="primary__row row justify-content-center">
                    <div className="col-6 m-5">
                        <h1 className="primary__title mb-4">Bienvenido a clínica Chillán</h1>
                        <p className="primary__text secondary">Somos la principal clínica de la comuna Chillán y
                            sus
                            alrededores,nos
                            caracterizamos por
                            nuestro amplio equipo de profesional de la salud y por brindar un servicio grato y de
                            calidad a
                            cada
                            uno
                            de nuestros pacientes. Nuestros mas de 15 años de experiencia nos respaldan.</p>
                        <button className="primary__btn btn btn-primary" type="button" onClick={scroll}>Conoce testimonios<i className="button__icon bi bi-chevron-right"></i></button>
                    </div>
                </div>
            </section>

            <section>
                <div className="cards__content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card p-4 border-0">
                                <i className="card__icon bi bi-hospital" title="icono misiòn"></i>
                                <h3 className="card__title">Misión</h3>
                                <p className="card__text text-body-secondary">Nuestra misión es brindar un servicio de salud con
                                    los más altos
                                    estándares de
                                    calidad a los
                                    habitantes de la comuna, garantizando la efectividad, ética laboral y amabilidad con
                                    nuestros
                                    pacientes.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card p-4 border-0">
                                <i className="card__icon bi bi-eye" title="icono visión"></i>
                                <h3 className="card__title">Visión</h3>
                                <p className="card__text text-body-secondary">Ser el principal centro de salud de la región,
                                    ofreciendo a toNamedos
                                    los
                                    pacientes
                                    la mejor experiencia
                                    en la atención integral y de alta complejidad, con los más altos estandares de
                                    calidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-5" >
                <h2 className="mb-5">Conoce nuestros servicios destacados
                </h2>
                <div className="row" ref={ref} >
                    {services.map((service, key) => (
                        <div className='col' key={key}>
                            <Profiler id="Services" onRender={onRenderCallback}>
                                <ServiceList key={key} service={service} />
                            </Profiler>
                        </div>
                    ))}

                </div>
            </section>
            <section className="cards my-5" tabIndex="0"  >
                <div className="cards__content">
                    <h2 className="cards__title mb-5" >Testimonios de nuestros pacientes</h2>
                    <div className="row" ref={ref}>
                        <div className="col-md-3">
                            <div className="card p-4">
                                <p className="card__text text-body-secondary">"Mi experiencia con Clínica Chillán, fue muy
                                    buena, me
                                    brindaron una
                                    atención
                                    rápida y
                                    con excelentes profesionales, que explican en detalle tu diagnóstico y tratamiento a
                                    seguir"
                                </p>
                                <p className="card__text card__text--strong">Victoria Solis</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-4">
                                <p className="card__text text-body-secondary">"Recurrí a urgencias de Clinica Chillán y recibi
                                    un
                                    trato amable por
                                    parte
                                    de sus
                                    profesionales y personal administrativo,ademas, me brindaron una atención rápida y
                                    efectiva"
                                </p>
                                <p className="card__text card__text--strong">María Ignacia Sanhueza</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-4">
                                <p className="card__text text-body-secondary">"Clínica Chillán, cuenta con una amplia gama de
                                    profesionales medicos
                                    de
                                    excelencia,
                                    que brindan un gran trato a sus pacientes con tratamientos efectivos, sin duda, la
                                    recomiendo"
                                </p>
                                <p className="card__text card__text--strong">Andrés Pérez</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-4">
                                <p className="card__text text-body-secondary">"Me opere hace un mes en Clínica Chillán con
                                    excelentes resultados y
                                    recibí un
                                    trato amable y
                                    cordial por para cada uno de sus funcionarios, estoy muy conforme con el servicio."
                                </p>
                                <p className="card__text card__text--strong">Andrea Poblete</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main >
    );
}

function onRenderCallback(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    endTime,
) {
    console.log(`Profiler: ${id},\n fase: ${phase},\n Duración actual: ${actualDuration},\n Duración base: ${baseDuration},\n inicio: ${startTime},\n fin: ${endTime}`);
}