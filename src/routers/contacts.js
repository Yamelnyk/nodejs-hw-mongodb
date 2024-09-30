import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
} from '../controllers/controllers.js';

const router = Router();

router.get('/contacts', getContactsController);

router.get('/contacts/:contactId', getContactByIdController);

export default router;
