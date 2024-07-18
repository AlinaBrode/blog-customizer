import styles from './ArticleParamsForm.module.scss';
import { ReactNode } from 'react';
import { classNames } from 'src/utils/utils';

interface PropsArticleParamsForm {
	children: ReactNode;
	arrowButton: ReactNode;
	isOpen: boolean;
}

export const ArticleParamsForm = ({
	children,
	arrowButton,
	isOpen,
}: PropsArticleParamsForm) => {
	return (
		<>
			{arrowButton}
			<aside
				className={classNames(
					styles.container,
					isOpen && styles.container_open
				)} onClick={(e)=>e.stopPropagation()}>
				<form className={styles.form}>{children}</form>
			</aside>
		</>
	);
};
