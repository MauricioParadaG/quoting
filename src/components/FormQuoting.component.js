import React from 'react'

const FormQuotingComponent = () => {
    return (
        <form >
            <div >
                <label>Expense Name</label>
                <input type="text"
                 name= "title"
                 placeholder="Expense Name"
                 className="u-full-width"
                 onChange={onChangeFormBudget}
                 value={expense.title}
                />

            </div>
        </form>
    )
};

export default FormQuotingComponent
