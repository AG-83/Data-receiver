import { IQuestionnaireItemType } from '../types/IQuestionnareItemType';

const itemType = [
    {
        display: 'Gruppe',
        code: IQuestionnaireItemType.group,
    },
    {
        display: 'Beskjed',
        code: IQuestionnaireItemType.display,
    },
    {
        display: 'Kortsvar',
        code: IQuestionnaireItemType.string,
    },
    {
        display: 'Langsvar',
        code: IQuestionnaireItemType.text,
    },
    {
        display: 'Flere alternativer',
        code: IQuestionnaireItemType.choice,
    },
    {
        display: 'Flere alternativer og åpent svar',
        code: IQuestionnaireItemType.openChoice,
    },
    {
        display: 'Dato',
        code: IQuestionnaireItemType.date,
    },
    {
        display: 'Tid',
        code: IQuestionnaireItemType.time,
    },
    {
        display: 'Tid og dato',
        code: IQuestionnaireItemType.dateTime,
    },
    {
        display: 'Bekreftelse',
        code: IQuestionnaireItemType.boolean,
    },
    {
        display: 'Tall',
        code: IQuestionnaireItemType.integer,
    },
];

export const checkboxExtension = [
    {
        url: 'http://ehelse.no/fhir/StructureDefinition/validationtext',
        valueString: 'Velg ett eller flere av alternativene.',
    },
    {
        url: 'http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl',
        valueCodeableConcept: {
            coding: [
                {
                    system: 'http://hl7.org/fhir/ValueSet/questionnaire-item-control',
                    code: 'check-box',
                },
            ],
        },
    },
];

export default itemType;
