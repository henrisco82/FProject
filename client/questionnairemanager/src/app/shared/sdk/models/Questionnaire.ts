/* tslint:disable */

declare var Object: any;
export interface QuestionnaireInterface {
  "id"?: any;
  "name": string;
  "title": string;
  "status": string;
  "date": Date;
  "publisher": string;
  "description": string;
  "item"?: Array<any>;
  "EnableWhen"?: Array<any>;
  "option"?: Array<any>;
  "subjectType"?: Array<any>;
  "required"?: string;
  "repeat"?: string;
  "readOnly"?: string;
  "validations"?: Array<any>;
  "relations"?: any;
  "acls"?: Array<any>;
  "methods"?: any;
}

export class Questionnaire implements QuestionnaireInterface {
  "id": any;
  "name": string;
  "title": string;
  "status": string;
  "date": Date;
  "publisher": string;
  "description": string;
  "item": Array<any>;
  "EnableWhen": Array<any>;
  "option": Array<any>;
  "subjectType": Array<any>;
  "required": string;
  "repeat": string;
  "readOnly": string;
  "validations": Array<any>;
  "relations": any;
  "acls": Array<any>;
  "methods": any;
  constructor(data?: QuestionnaireInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Questionnaire`.
   */
  public static getModelName() {
    return "Questionnaire";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Questionnaire for dynamic purposes.
  **/
  public static factory(data: QuestionnaireInterface): Questionnaire{
    return new Questionnaire(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Questionnaire',
      plural: 'Questionnaires',
      path: 'Questionnaires',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "title": {
          name: 'title',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "date": {
          name: 'date',
          type: 'Date'
        },
        "publisher": {
          name: 'publisher',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "item": {
          name: 'item',
          type: 'Array&lt;any&gt;'
        },
        "EnableWhen": {
          name: 'EnableWhen',
          type: 'Array&lt;any&gt;'
        },
        "option": {
          name: 'option',
          type: 'Array&lt;any&gt;'
        },
        "subjectType": {
          name: 'subjectType',
          type: 'Array&lt;any&gt;'
        },
        "required": {
          name: 'required',
          type: 'string'
        },
        "repeat": {
          name: 'repeat',
          type: 'string'
        },
        "readOnly": {
          name: 'readOnly',
          type: 'string'
        },
        "validations": {
          name: 'validations',
          type: 'Array&lt;any&gt;'
        },
        "relations": {
          name: 'relations',
          type: 'any'
        },
        "acls": {
          name: 'acls',
          type: 'Array&lt;any&gt;'
        },
        "methods": {
          name: 'methods',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
