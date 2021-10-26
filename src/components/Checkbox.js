import { useField } from 'formik';

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div>
      <label>
        <input type="checkbox" {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );

};

export default Checkbox;