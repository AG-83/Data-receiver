import React, { useContext } from 'react';
import FormField from '../../FormField/FormField';
import { IExtentionType } from '../../../types/IQuestionnareItemType';
import { QuestionnaireItem } from '../../../types/fhir';
import { TreeContext } from '../../../store/treeStore/treeStore';
import { setItemExtension } from '../../../helpers/extensionHelper';

type ValidationAnswerTypeAttachmentProps = {
    item: QuestionnaireItem;
};

const ValidationAnswerTypeAttachment = ({ item }: ValidationAnswerTypeAttachmentProps): JSX.Element => {
    const { dispatch } = useContext(TreeContext);
    const maxSize = item.extension?.find((ext) => ext.url === IExtentionType.maxSize)?.valueDecimal || '';

    function updateMaxSize(size: number) {
        const extension = { url: IExtentionType.maxSize, valueDecimal: size };
        setItemExtension(item, extension, dispatch);
    }

    return (
        <>
            <FormField label="Maksimal filstørrelse i MB">
                <input
                    defaultValue={maxSize}
                    type="number"
                    aria-label="maximum filesize"
                    onBlur={(e) => updateMaxSize(parseFloat(e.target.value))}
                ></input>
            </FormField>
        </>
    );
};

export default ValidationAnswerTypeAttachment;
