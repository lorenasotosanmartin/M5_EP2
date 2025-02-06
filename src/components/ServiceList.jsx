import PropTypes from 'prop-types';
import { Profiler } from 'react';

export default function ServiceList(service) {

  return (
    <>
      <Profiler id="ServiceList" onRender={onRenderCallback}>
        <i className={service.service.icono} style={{ color: '#0D6EFD', fontSize: '4rem' }}></i>
        <h3>{service.service.servicio}</h3>
        <p>{service.service.descripcion}</p>
      </Profiler>
    </>
  );
}

ServiceList.propTypes = {
  service: PropTypes.shape({
    servicio: PropTypes.string,
    descripcion: PropTypes.string,

  })

};


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

