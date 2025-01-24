import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', getContactsController);

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts', createContactController);

router.patch('/contacts/:contactId', patchContactController);

router.delete('/contacts/:contactId', deleteContactController);

export default router;
