import { RenamedclassInterface } from 'interfaces/renamedclass';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SchoolInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  Renamedclass?: RenamedclassInterface[];
  user?: UserInterface;
  _count?: {
    Renamedclass?: number;
  };
}

export interface SchoolGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
