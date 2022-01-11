import { Guid } from 'guid-typescript';

export class UserInfo {
  given_name?: string = '';
  email?: string = '';
}

export class RenderStructure {
  fieldType?: string = typeof '';
  type? = typeof '';
  fieldValue: any;
  
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
  CreatedBy: UserInfo;
  Sections: MedicalRecordSectionStructure[];
}
