
// GET payee list
//route GET /api/payees
const getPayees = (req, res) => {
    res.status(200).json({ message: ' Get Payees ' })
}

// POST new Payee
//route POST /api/payees
const newPayee = (req, res) => {
    res.status(200).json({ message: "Create Payee"})
   
}

// PUT edit Payee
//route PUT /api/payee/:id
const editPayee = (req, res) => {
res.status(200).json({ message: "Edit Payee"})
}

//DELETE delete Payee
//route DELETE /api/payee/:id
const deletePayee = (req, res) => {
    res.status(200).json({ message: "Delete this payee"})
}

module.exports = {
    getPayees,
    newPayee,
    editPayee,
    deletePayee
}