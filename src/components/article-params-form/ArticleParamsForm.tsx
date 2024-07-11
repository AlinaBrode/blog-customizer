import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { classNames } from 'src/utils/utils';
import { Text } from '../text';
import { Select } from '../select';
import { backgroundColors, contentWidthArr, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [fontSelected, setFontSelected] = useState(fontFamilyOptions[0]);
	const [fontSizeSelected, setFontSizeSelected] = useState(fontSizeOptions[0]);
	const [fontColorSelected, setFontColorSelected] = useState(fontColors[0]);
	const [bgColorSelected, setBgColorSelected] = useState(backgroundColors[0]);
	const [widthSelected, setWidthSelected] = useState(contentWidthArr[0]);

	return (
		<>
			<ArrowButton onClick={()=>setIsOpen(!isOpen)} isOpen={isOpen}/>
			<aside className={classNames(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<Text as="h2" weight={800} size={31} uppercase>задайте параметры</Text>

					<Select
						selected={fontSelected}
						onChange={setFontSelected}
						options={fontFamilyOptions}
						title='шрифт'
					></Select>

					<RadioGroup
						selected={fontSizeSelected}
						name='что-нить'
						onChange={setFontSizeSelected}
						options={fontSizeOptions}
						title='размер шрифта'
					></RadioGroup>

					<Select
						selected={fontColorSelected}
						onChange={setFontColorSelected}
						options={fontColors}
						title='цвет шрифта'
					></Select>

					<Separator />

					<Select
						selected={bgColorSelected}
						onChange={setBgColorSelected}
						options={backgroundColors}
						title='цвет фона'
					></Select>

					<Select
						selected={widthSelected}
						onChange={setWidthSelected}
						options={contentWidthArr}
						title='ширина контента'
					></Select>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
