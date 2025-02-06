import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { Profiler } from 'react';
import { useNavigate } from "react-router-dom";

export default function TableList(appointments) {

    const navigate = useNavigate();
    let dataAppointments = appointments.appointments;
    let th = ['Fecha', 'Hora', 'Paciente', 'Doctor'];
    
    return (
        <>
        <Table hover>
            <thead>
            <Profiler id="Encabezados" onRender={onRenderCallback}>
                <tr>
                    {th.map((th, key) =>
                        <th key={key}>{th}</th>
                    )}
                    <th colSpan={2} ></th>
                </tr>
                </Profiler>
            </thead>
            <tbody>
                 <Profiler id="dataAppointments" onRender={onRenderCallback}>
                {dataAppointments.map((appointment, key) => (
                    <tr key={key} >
                        <td>{appointment.fecha}</td>
                        <td>{appointment.hora}</td>
                        <td>{appointment.paciente}</td>
                        <td>{appointment.doctor}</td>
                        <td><Button variant="success">Confirmar</Button></td>
                        <td><Button variant="danger">Cancelar</Button></td>
                    </tr>
                ))}
</Profiler>
            </tbody>
        </Table>
        </>
    );
}


 TableList.propTypes = {
   appointments: PropTypes.array
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
