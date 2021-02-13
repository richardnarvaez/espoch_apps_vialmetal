import { getAllUsers, getUserById, insertUser, updateUser, deleteUser } from '../../../controllers/users'

export default async (req, res) => {
   try {
     const result = await getAllUsers()
      res.status(200).json(result)
   } catch (err) {
      console.log(err)
      res.status(500).json({ success: false })
   }
}

const insertarUsuario = async (req, res) => {
   try {
      const { name, email, image} = req.body;
      const dataUser = {
         name, email, image
      } 
      const result = await insertUser(dataUser)
      res.status(200).json(result)
   } catch (err) {
      console.log(err)
      res.status(500).json({ success: false })
   }
}

const actualizarUsuario = async (req, res) => {
   try {
      const {id} = req.params
      const { name, email, image} = req.body; 
      const dataUser = {
         name, email, image
      }
      const result = await updateUser(id, dataUser)
      res.status(200).json(result)
   } catch (err) {
      console.log(err)
      res.status(500).json({ success: false })
   }
}

const borrarUsuario = async (req, res) => {
   try {
      const {id} = req.params
      const result = await deleteUser(id)
      res.status(200).json(result)
   } catch (err) {
      console.log(err)
      res.status(500).json({ success: false })
   }
}

//Yo quería así :c
/*
router.get('/delete/:id', async (req, res) => {
   const { id } = req.params;
   await pool.query('DELETE FROM links WHERE ID = ?', [id]);
   req.flash('success', 'Link Removed Successfully');
   res.redirect('/links');
});*/