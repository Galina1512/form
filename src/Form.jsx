import _ from './Form.module.css';
import {useForm} from 'react-hook-form';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
    console.log(errors);
  
    return (
    <form className={_.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={_.wrap}>
          <label className={_.label} htmlFor='email'>
            Email
          </label>
          <input 
            {...register('email', {
              required: {
                value: true,
                message: 'Заполните поле',
              },
              pattern: {
                value: /^.+@.+\..+$/,
                message: 'Неверный email',
            }
            },
            )} 
            type='text' 
            id='email'
            className={_.input} 
            aria-invalid={!!errors.email}
            />
       {errors.email && <p className={_.error}>{errors.email.message}</p>}
      </div>

      <div className={_.wrap}>
        <label className={_.label} htmlFor='password'>Пароль</label>
        <input className={_.input} 
            {...register('password', {
              required: {
                value: true,
                message: 'Неверный пароль',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
                message: 'Пароль должен содержать 6 символов: строчная и прописаная буква, цифра и спецсимвол',
            }
            },
            )} 
           type='text' 
           id='password' 
           aria-invalid={!!errors.password}
        />
        {errors.password && 
        (
          <>
            <p className={_.error}>Неверный пароль</p>
            <p className={_.error_password}>{errors.password.message} </p>
          </>
        ) 
        }      
    </div>

        <div className={_.wrapCheckbox}>
          <input className={_.checkbox}
            {...register('save')} 
            type='checkbox' 
            id='save' 
            name='save' 
          />
          <label className={_.labelChickbox} htmlFor='save' >Сохранить пароль</label>
        </div>

            <button className={_.submit} type='submit'>
                Войти
            </button>
    </form>
  )
};

