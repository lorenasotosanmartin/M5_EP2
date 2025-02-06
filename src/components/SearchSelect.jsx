import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default function SearchSelect(especialidades) {
    let dataEspecialidades = especialidades.especialidades;
    return (
        <div className='col-4 d-flex my-2'>
            <Form.Select aria-label="Default select example">
                <option>Selecciona una especialidad</option>
                {dataEspecialidades.map((especialidad, key) => (
                    <option value={especialidad.especialidad} key={key}>{especialidad.especialidad}</option>
                ))}
            </Form.Select>
            <Button variant="primary d-flex mx-1">Filtrar <i className="bi bi-search"></i></Button>
        </div>
    )
}

 SearchSelect.propTypes = {
   especialidades: PropTypes.array
 }

