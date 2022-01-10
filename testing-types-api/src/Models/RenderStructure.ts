import { Guid } from 'guid-typescript';

export class UserInfo {
  given_name?: string = '';
  email?: string = '';
}

export class RenderStructure {
  fieldType?: string = typeof '';
  type? = typeof '';
  fieldValue: unknown;
}

export class MedicalRecordFieldStructure {
  Id: Guid;
  Order?: number = 0;
  Name: string;
  DisplayName: string;
  typeName: string = typeof '';
  Value?: string = '';
}

export class MedicalRecordSectionStructure {
  Id: Guid;
  Order?: number = 0;
  Name?: string = '';
  DisplayName?: string = '';
  Fields?: MedicalRecordFieldStructure[] = [new MedicalRecordFieldStructure()];
  SubSections?: [] = [];
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
