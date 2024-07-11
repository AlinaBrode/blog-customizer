import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { ReactNode, useState } from 'react';
import { classNames } from 'src/utils/utils';
import { Text } from '../text';
import { Select } from '../select';
import { OptionType, backgroundColors, contentWidthArr, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

interface PropsArticleParamsForm {
	children: ReactNode;
}

export const ArticleParamsForm = ({children} : PropsArticleParamsForm) => {
	const [isOpen, setIsOpen] = useState(false);


	return (
		<>
			<ArrowButton onClick={()=>setIsOpen(!isOpen)} isOpen={isOpen}/>
			<aside className={classNames(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<Text as="h2" weight={800} size={31} uppercase>задайте параметры</Text>

					{children}

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
