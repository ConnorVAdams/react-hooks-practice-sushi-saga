import { useState } from 'react'
const Wallet = ({ handleAddMoney }) => {
  const [walletOpen, setWalletOpen] = useState(false)
  const [formData, setFormData] = useState('')

  const handleFormChange = ({ target : { value }}) => {
    setFormData(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddMoney(Number(formData))
  }

  return (
    <div>
      <button onClick={() => setWalletOpen(!walletOpen)}>{!walletOpen ? 'Open Wallet' : 'Close Wallet'}</button>
      {!walletOpen ? null :
      <form onSubmit={handleSubmit}>
        <label forhtml='add-amount'> Amount to Add
          <input type='number' name='add-amount' onChange={handleFormChange} value={formData}/>
        </label>
        <input type='submit' />
      </form>}
    </div>
  )
}

export default Wallet