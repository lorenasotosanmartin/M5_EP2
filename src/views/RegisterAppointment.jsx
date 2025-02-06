import { useEffect, useState } from 'react';
import TableList from '../components/TableList';
import axios from 'axios';
import { Profiler } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logout from '../components/Logout'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function RegisterAppointment() {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const loadAppointments = async () => {
            const appointments = await axios.get("/src/public/appointment.json");
            setAppointments(appointments.data.appointments);
        }
        loadAppointments();
    }, []);


    if (appointments.length === 0) {
        return (<h1>loading</h1>)
    }

    return (
        <main>
            <Logout />
            <section className='my-5'>
                <div className="row">
                    <div className="col-6">
                        <h1 className="primary__title mb-4">Registro de citas</h1>
                    </div>
                    <div className="col-6" >
                        <Button onClick={() => navigate("/appointment")} variant="outline-primary" size="md"> Reservar cita <i className="bi bi-clipboard ml-1"> </i></Button>
                    </div>
                </div>

            </section>
            <section>
                <div className='container mb-5'>
                    <Profiler id="registerAppointment" onRender={onRenderCallback}>
                        <TableList appointments={appointments} />
                    </Profiler>
                </div>
            </section>
            <Footer />
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