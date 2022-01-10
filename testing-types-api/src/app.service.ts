import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Guid } from 'guid-typescript';
import { v4 as uuidv4 } from 'uuid';
import {
  MedicalRecordSectionStructure,
  MedicalRecordStructure,
} from './Models/RenderStructure';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string {
    const _medicalRecordStructure = new MedicalRecordStructure();

    _medicalRecordStructure.Id = Guid.create();
    _medicalRecordStructure.CreatedDate = new Date();
    _medicalRecordStructure.CreatedBy = {
      given_name: 'Agrimaldo',
      email: 'agrimaldo Werlei Mendes Brandão',
    };

    const _anamneseSection = new MedicalRecordSectionStructure();
    _anamneseSection.Id = Guid.create();
    _anamneseSection.Order = 1;
    _anamneseSection.Name = 'Anamnese';
    _anamneseSection.DisplayName = 'Anamnese';
    _anamneseSection.Fields.push({
      Id: Guid.create(),
      Order: 1,
      Name: 'motivoConsulta',
      DisplayName: 'Motivo da consulta',
      typeName: 'string',
    });

    _medicalRecordStructure.Sections.push(_anamneseSection);

    return JSON.stringify(_medicalRecordStructure);
  }

  getBundle(mfeName: string): Promise<string> {
    const url = `http://localhost:3000/${mfeName}-app.bundle.js`;
//http://localhost:3000/mf-content-app.bundle.js
    return axios.get(url)
      .then((res) => {
        //console.log('res.data', res.data);
        return res.data;
      })
      .catch((error:any) => {
        return error.message as string;
      });
  }
}
