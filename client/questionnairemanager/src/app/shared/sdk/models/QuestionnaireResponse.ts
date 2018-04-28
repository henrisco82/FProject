/* tslint:disable */

declare var Object: any;
export interface QuestionnaireResponseInterface {
  "identifier": string;
  "questionnaire": any;
  "status": string;
  "author": any;
  "source": any;
  "authored": Date;
  "items"?: Array<any>;
  "id"?: any;
}

export class QuestionnaireResponse implements QuestionnaireResponseInterface {
  "identifier": string;
  "questionnaire": any;
  "status": string;
  "author": any;
  "source": any;
  "authored": Date;
  "items": Array<any>;
  "id": any;
  constructor(data?: QuestionnaireResponseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `QuestionnaireResponse`.
   */
  public static getModelName() {
    return "QuestionnaireResponse";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of QuestionnaireResponse for dynamic purposes.
  **/
  public static factory(data: QuestionnaireResponseInterface): QuestionnaireResponse{
    return new QuestionnaireResponse(data);
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
      name: 'QuestionnaireResponse',
      plural: 'QuestionnaireResponses',
      path: 'QuestionnaireResponses',
      idName: 'id',
      properties: {
        "identifier": {
          name: 'identifier',
          type: 'string'
        },
        "questionnaire": {
          name: 'questionnaire',
          type: 'any'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "author": {
          name: 'author',
          type: 'any'
        },
        "source": {
          name: 'source',
          type: 'any'
        },
        "authored": {
          name: 'authored',
          type: 'Date'
        },
        "items": {
          name: 'items',
          type: 'Array&lt;any&gt;'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
