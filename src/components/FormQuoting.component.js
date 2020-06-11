import React, {useState} from 'react';
import styled from '@emotion/styled';

const DivFild = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    
`; 

const LabelTitle = styled.label`
    flex: 0 0 110px;
`; 

const SelectDropdown = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`; 

const InputRadio = styled.input`
   margin: 0 1rem;
`; 

const ButtonForm = styled.button`
   background-color: #00838F;
   font-size: 16px;
   width: 100%;
   padding: 1rem;
   color: #fff;
   text-transform: uppercase;
   font-weight:bold;
   border: none;
   transition: background-color .6s ease;
   margin-top: 1rem;

   &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`; 



const FormQuotingComponent = () => {

    const [formData, setFormDataState] = useState(
        {
           id:'',
           type :'',
           year:'',
           city:'',
           rooms:'',
           qmeters:'',
           price:'',
           rented:''
        }
      );

    const onChangeForm = event => {
        setFormDataState({
            ...formData,
            // adding an ID - uuid library
            //id: uuid(),
            // adding the form info to the state
            [event.target.name]: event.target.value
        });
    }   

    return (
        <form >
            <DivFild>
                <LabelTitle>Property Type</LabelTitle>
                <SelectDropdown
                    name="type"
                    value={formData.type}
                    onChange={onChangeForm}
                >
                    <option value="">- Select -</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="building">Building</option>
                    <option value="land">Land</option>
                </SelectDropdown>
            </DivFild>

            <DivFild>
                <LabelTitle>Property year</LabelTitle>
                <SelectDropdown
                    name="year"
                    value={formData.year}
                    onChange={onChangeForm}
                >
                    <option value="">- Select -</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                </SelectDropdown>
            </DivFild>

            <DivFild>
                <LabelTitle>City</LabelTitle>
                <SelectDropdown
                    name="city"
                    value={formData.city}
                    onChange={onChangeForm}
                >
                    <option value="">- Select -</option>
                    <option value="barranquilla">Barranquilla</option>
                    <option value="bogota">Bogota</option>
                    <option value="berlin">Berlin</option>
                </SelectDropdown>
            </DivFild>

            <DivFild>
                <LabelTitle>Number or Rooms</LabelTitle>
                <SelectDropdown
                    name="rooms"
                    value={formData.rooms}
                    onChange={onChangeForm}
                >
                    <option value="">- Select -</option>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="tree">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    <option value="six">6</option>
                    <option value="seven">7</option>
                    <option value="eight">8</option>
                    <option value="nine">9</option>
                    <option value="teen">10</option>
                    <option value="eleven">11</option>
                    <option value="twelve">12</option>
                </SelectDropdown>
            </DivFild>

            <DivFild>
                <LabelTitle>Quadratmete m²</LabelTitle>
                <SelectDropdown
                    name="qmeters"
                    value={formData.qmeters}
                    onChange={onChangeForm}
                >
                    <option value="">- Select -</option>
                    <option value="small">1 - 45</option>
                    <option value="medium">46 - 130</option>
                    <option value="large">131 - 250</option>
                    <option value="xlarge">251 - 500</option>
                    <option value="xxlarge">501 - 1000</option>
                </SelectDropdown>
            </DivFild>


            <DivFild>
                <LabelTitle>Renting Price / Dollar</LabelTitle>
                <SelectDropdown
                    name="price"
                    value={formData.price}
                    onChange={onChangeForm}
                >
                    <option value="">- Select -</option>
                    <option value="scheap">100 - 200</option>
                    <option value="cheap">201 - 500</option>
                    <option value="normal">501 - 800</option>
                    <option value="expensive">801 - 1200</option>
                    <option value="sexpensive">1201 - 1500</option>
                    <option value="notnormal">1500 - More</option>
                </SelectDropdown>
            </DivFild>

            <DivFild>
                <LabelTitle>Is the property rented?</LabelTitle>
                <InputRadio type="radio"
                name="rented"
                value="yes"
                checked={formData.rented === "yes"}
                onChange={onChangeForm}
                /> Yes

                <InputRadio type="radio"
                name="rented"
                value="no"
                checked={formData.rented === "no"}
                onChange={onChangeForm}
                /> No
            </DivFild>

            {/** Button */}
            <ButtonForm type="button"
                className="a">
                Quote
            </ButtonForm>                 
            

        </form>
    )
};

export default FormQuotingComponent
