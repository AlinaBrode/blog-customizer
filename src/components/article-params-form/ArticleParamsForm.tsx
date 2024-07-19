import styles from './ArticleParamsForm.module.scss';
import { ArrowButton } from '../arrow-button';
import { MouseEvent, useState } from 'react';
import { classNames } from 'src/utils/utils';
import { Button } from '../button';

import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Text } from '../text';

import {
	OptionType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from '../../constants/articleProps';

import articleParamsStyles from './ArticleParamsForm.module.scss';


interface PropsArticleParamsForm {
	fontSelected: OptionType;
	setFontSelected: (selected: OptionType) => void;
	fontSizeSelected: OptionType;
	setFontSizeSelected: (value: OptionType) => void;
	fontColorSelected: OptionType;
	setFontColorSelected: (value: OptionType) => void;
	bgColorSelected: OptionType;
	setBgColorSelected: (selected: OptionType) => void;
	widthSelected:OptionType;
	setWidthSelected:(selected: OptionType) => void;
	translateState: (evt: MouseEvent) => void;
	restoreState: () => void;
}

export const ArticleParamsForm = ({
	fontSelected,
	setFontSelected,
	fontSizeSelected,
	setFontSizeSelected,
	fontColorSelected,
	setFontColorSelected,
	bgColorSelected,
	setBgColorSelected,
	widthSelected,
	setWidthSelected,
	translateState,
	restoreState

}: PropsArticleParamsForm) => {
	const [isOpen, setIsOpen] = useState(false);

	const reversePosition=() => setIsOpen(!isOpen);

	return (
		<>
			<ArrowButton
						onClick={(evt) => {
							evt.stopPropagation();
							reversePosition();
						}}
						isOpen={isOpen}
					/>
			<aside
				className={classNames(
					styles.container,
					isOpen && styles.container_open
				)} onClick={(e)=>e.stopPropagation()}>
				<form className={styles.form}>

				<Text as='h2' weight={800} size={31} uppercase>
					задайте параметры
				</Text>

				<Select
					selected={fontSelected}
					onChange={setFontSelected}
					options={fontFamilyOptions}
					title='шрифт'></Select>

				<RadioGroup
					selected={fontSizeSelected}
					name='fontSize'
					onChange={setFontSizeSelected}
					options={fontSizeOptions}
					title='размер шрифта'></RadioGroup>

				<Select
					selected={fontColorSelected}
					onChange={setFontColorSelected}
					options={fontColors}
					title='цвет шрифта'></Select>

				<Separator />

				<Select
					selected={bgColorSelected}
					onChange={setBgColorSelected}
					options={backgroundColors}
					title='цвет фона'></Select>

				<Select
					selected={widthSelected}
					onChange={setWidthSelected}
					options={contentWidthArr}
					title='ширина контента'></Select>

				<div className={articleParamsStyles.bottomContainer}>
					<Button title='Сбросить' type='reset' onClick={restoreState} />
					<Button
						title='Применить'
						type='submit'
						onClick={(evt: MouseEvent<HTMLButtonElement>) =>
							translateState(evt)
						}
					/>
				</div>

				</form>
			</aside>
		</>
	);
};
