import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Guid } from 'guid-typescript';
import { v4 as uuidv4 } from 'uuid';
import {
  MedicalRecordBlockStructure,
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

    const _motivoConsultaBlock = new MedicalRecordBlockStructure();
    _motivoConsultaBlock.Id = Guid.create();
    _motivoConsultaBlock.Order = 1;
    _motivoConsultaBlock.Name = 'motivoConsulta';
    _motivoConsultaBlock.DisplayName = 'Queixa ou motivo da consulta';
    _motivoConsultaBlock.Fields.push(
      {
            Id: Guid.create(),
            Order: 1,
            Name: 'motivoConsultaCampo',
            PlaceHolder: 'insira o motivo da consulta',
            typeName: 'string',
            isRequired: true,
            maxSize: 500,
          },
    );
    _anamneseSection.Blocks.push(_motivoConsultaBlock);

    const _medicamentoBlock = new MedicalRecordBlockStructure();
    _medicamentoBlock.Id = Guid.create();
    _medicamentoBlock.Order = 2;
    _medicamentoBlock.Name = 'medicamentoEmUso';
    _medicamentoBlock.DisplayName = 'Medicamentos em uso';
    _medicamentoBlock.Fields.push(
      {
            Id: Guid.create(),
            Order: 1,
            Name: 'medicamentoEmUsoCampo',
            PlaceHolder: 'insira o(s) medicamento(s)',
            typeName: 'string',
            isRequired: true,
            maxSize: 500,
          },
    );
    _anamneseSection.Blocks.push(_medicamentoBlock);

    const _avaliacaoFisicaBlock = new MedicalRecordBlockStructure();
    _avaliacaoFisicaBlock.Id = Guid.create();
    _avaliacaoFisicaBlock.Order = 3;
    _avaliacaoFisicaBlock.Name = 'avaliacaoFisica';
    _avaliacaoFisicaBlock.DisplayName = 'Avaliação física';
    _avaliacaoFisicaBlock.FieldAligned = true;
    _avaliacaoFisicaBlock.Fields.push(
      {
            Id: Guid.create(),
            Order: 1,
            Name: 'avaliacaoFisicaPesoCampo',
            PlaceHolder: 'Peso',
            typeName: 'number',
            isRequired: true,
            Aligned:true,
            Suffix: 'kg'
          },
    );
    _avaliacaoFisicaBlock.Fields.push(
      {
            Id: Guid.create(),
            Order: 2,
            Name: 'avaliacaoFisicaAlturaCampo',
            PlaceHolder: 'Altura',
            typeName: 'number',
            isRequired: true,
            Aligned:true,
            Suffix: 'cm'
      },
    );    
    _avaliacaoFisicaBlock.Fields.push(
      {
            Id: Guid.create(),
            Order: 3,
            Name: 'avaliacaoFisicaObsCampo',
            PlaceHolder: 'Insira Observações',
            typeName: 'string',
            isRequired: false,
            maxSize: -1,
      },
    );       
    _anamneseSection.Blocks.push(_avaliacaoFisicaBlock);    
 

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
