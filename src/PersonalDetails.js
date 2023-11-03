import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import './App.css';

class PersonalDetails extends Component {
  continue = e => {
    e.preventDefault(); 
    const isFirstNameValid = this.props.validateFirstName();
    const isLastNameValid = this.props.validateLastName();
    const isPhoneValid = this.props.validatePhone();
    if (isFirstNameValid && isLastNameValid && isPhoneValid) {
      this.props.nextStep();
    }
  }

  render() {
    const { 
      firstname, 
      lastname, 
      email, 
      phone, 
      handleChange, 
      validateFirstName,
      validateLastName,
      validatePhone,
      isErrorFirstName,
      isErrorLastName,
      isErrorPhone,
      errorMessageFirstName,
      errorMessageLastName,
      errorMessagePhone,
    } = this.props;

    return (
      <div className='form'>
        <form>

          <Stepper
            steps={[{ label: 'Personal details' }, { label: 'Course details' }, { label: 'Summary' }]}
            activeStep={0}
            styleConfig={{
              activeBgColor: '#2b7cff',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#2b7cff',
              completedBgColor: '#fff',
              completedTextColor: '#2b7cff',
              size: '3em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

          <div className='form-group'>
            <div className='form-group__element'>
              <label htmlFor='first name' className='form-group__label'>
              First name
              </label>
              <input type='text' value={firstname} name='first name' onChange={handleChange('firstname')} onBlur={validateFirstName} className='form-group__input'/>
              <p className='error'>{isErrorFirstName && errorMessageFirstName}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='last name' className='form-group__label'>
              Last name
              </label>
              <input type='text' value={lastname} name='last name' onChange={handleChange('lastname')} onBlur={validateLastName} className='form-group__input' />
              <p className='error'>{isErrorLastName && errorMessageLastName}</p>
            </div>

            <div className='form-group__element'>
              <label htmlFor='email' className='form-group__label'>
              Email
              </label>
              <input type='email' value={email} name='email' onChange={handleChange('email')} className='form-group__input' />
            </div>

            <div className='form-group__element'>
              <label htmlFor='phone' className='form-group__label'>
              Phone
              </label>
              <input type='number' value={phone} name='phone' onChange={handleChange('phone')} onBlur={validatePhone} className='form-group__input' />
              <p className='error'>{isErrorPhone && errorMessagePhone}</p>
            </div>
          </div>
            
          <div style={{textAlign: 'center'}}>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </div>

        </form>
      </div>
    )
  }
}

export default PersonalDetails;