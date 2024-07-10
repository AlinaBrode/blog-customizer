import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { classNames } from 'src/utils/utils';
import { Text } from '../text';
import { Select } from '../select';
import { fontFamilyOptions } from 'src/constants/articleProps';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [fontSelected, setFontSelected] = useState(fontFamilyOptions[0]);

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
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
