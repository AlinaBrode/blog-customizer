import styles from './ArticleParamsForm.module.scss';
import { ReactNode, useState } from 'react';
import { classNames } from 'src/utils/utils';
import { Button } from '../button';
import { Select } from '../select';
import { OptionType, backgroundColors, contentWidthArr, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

interface PropsArticleParamsForm {
	children: ReactNode;
	arrowButton: ReactNode;
	isOpen: boolean;
}

export const ArticleParamsForm = ({children, arrowButton, isOpen} : PropsArticleParamsForm) => {
	return (
		<>
			{arrowButton}
			<aside className={classNames(styles.container, isOpen && styles.container_open)}>
			<form className={styles.form}>
				{children}

			</form>
			</aside>
		</>
	);
};
