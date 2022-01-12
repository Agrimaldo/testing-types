import { Guid } from 'guid-typescript';

export interface IUserInfo {
  sub: string;
  given_name: string;
  preferred_username: string;
  membership: string[];
  email: string;
}
export class MedicalRecordBlockStructure {
  constructor() {
    this.Fields = [];
  }
  Id: Guid;
  Order?: number = 0;
  Name: string;
  DisplayName: string;
  FieldAligned?: boolean = false;
  Fields: MedicalRecordFieldStructure[];
}
export class MedicalRecordFieldStructure {
  Id: Guid;
  Order?: number = 0;
  Name: string;
  PlaceHolder?: string = '';
  typeName: string = typeof '';
  Value?: any = '';
  maxSize?: number = -1;
  isRequired?: boolean = false;
  Aligned?: boolean = false;
  Preffix?: string = '';
  Suffix?: string = '';
}
export class MedicalRecordSectionStructure {
  constructor() {
    this.Blocks = [];
  }
  Id: Guid;
  Order?: number = 0;
  Name?: string = '';
  DisplayName?: string = '';
  Blocks: MedicalRecordBlockStructure[];
}

export class MedicalRecordStructure {
  constructor() {
    this.Sections = [];
  }

  Id: Guid;
  CreatedDate: Date;
  CreatedBy: IUserInfo;
  Sections: MedicalRecordSectionStructure[];
}
