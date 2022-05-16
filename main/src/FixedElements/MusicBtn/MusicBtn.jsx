import React from 'react';
import './style.css';

export default function MusicBtn() {
        return (
                <button className='mainpage__musicBtn'>
                        <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2932 2.27578C12.1469 2.27578 12.0066 2.33391 11.9031 2.43737C11.7996 2.54084 11.7415 2.68118 11.7415 2.8275V17.1723C11.7415 17.3187 11.7996 17.459 11.9031 17.5625C12.0066 17.6659 12.1469 17.7241 12.2932 17.7241C12.4396 17.7241 12.5799 17.6659 12.6834 17.5625C12.7868 17.459 12.845 17.3187 12.845 17.1723V2.8275C12.845 2.68118 12.7868 2.54084 12.6834 2.43737C12.5799 2.33391 12.4396 2.27578 12.2932 2.27578ZM7.87945 4.48267C7.73312 4.48267 7.59279 4.5408 7.48932 4.64427C7.38585 4.74774 7.32772 4.88807 7.32772 5.0344V14.9654C7.32772 15.1118 7.38585 15.2521 7.48932 15.3556C7.59279 15.459 7.73312 15.5172 7.87945 15.5172C8.02577 15.5172 8.16611 15.459 8.26957 15.3556C8.37304 15.2521 8.43117 15.1118 8.43117 14.9654V5.0344C8.43117 4.88807 8.37304 4.74774 8.26957 4.64427C8.16611 4.5408 8.02577 4.48267 7.87945 4.48267ZM3.46565 7.24129C3.31933 7.24129 3.17899 7.29942 3.07552 7.40289C2.97206 7.50636 2.91393 7.64669 2.91393 7.79302V12.2068C2.91393 12.3531 2.97206 12.4935 3.07552 12.5969C3.17899 12.7004 3.31933 12.7585 3.46565 12.7585C3.61198 12.7585 3.75231 12.7004 3.85578 12.5969C3.95925 12.4935 4.01738 12.3531 4.01738 12.2068V7.79302C4.01738 7.64669 3.95925 7.50636 3.85578 7.40289C3.75231 7.29942 3.61198 7.24129 3.46565 7.24129ZM1.25876 8.34474C1.11243 8.34474 0.972096 8.40287 0.868628 8.50634C0.765159 8.60981 0.707031 8.75014 0.707031 8.89647V11.1034C0.707031 11.2497 0.765159 11.39 0.868628 11.4935C0.972096 11.597 1.11243 11.6551 1.25876 11.6551C1.40508 11.6551 1.54541 11.597 1.64888 11.4935C1.75235 11.39 1.81048 11.2497 1.81048 11.1034V8.89647C1.81048 8.75014 1.75235 8.60981 1.64888 8.50634C1.54541 8.40287 1.40508 8.34474 1.25876 8.34474ZM16.707 6.68957C16.5607 6.68957 16.4204 6.7477 16.3169 6.85117C16.2134 6.95464 16.1553 7.09497 16.1553 7.24129V12.7585C16.1553 12.9049 16.2134 13.0452 16.3169 13.1487C16.4204 13.2521 16.5607 13.3103 16.707 13.3103C16.8534 13.3103 16.9937 13.2521 17.0972 13.1487C17.2006 13.0452 17.2588 12.9049 17.2588 12.7585V7.24129C17.2588 7.09497 17.2006 6.95464 17.0972 6.85117C16.9937 6.7477 16.8534 6.68957 16.707 6.68957ZM14.5001 5.0344C14.3538 5.0344 14.2135 5.09253 14.11 5.19599C14.0065 5.29946 13.9484 5.4398 13.9484 5.58612V14.4137C13.9484 14.56 14.0065 14.7004 14.11 14.8038C14.2135 14.9073 14.3538 14.9654 14.5001 14.9654C14.6465 14.9654 14.7868 14.9073 14.8903 14.8038C14.9937 14.7004 15.0519 14.56 15.0519 14.4137V5.58612C15.0519 5.4398 14.9937 5.29946 14.8903 5.19599C14.7868 5.09253 14.6465 5.0344 14.5001 5.0344ZM10.0863 0.620605C9.94002 0.620605 9.79968 0.678733 9.69621 0.782202C9.59275 0.88567 9.53462 1.026 9.53462 1.17233V18.8275C9.53462 18.9738 9.59275 19.1142 9.69621 19.2176C9.79968 19.3211 9.94002 19.3792 10.0863 19.3792C10.2327 19.3792 10.373 19.3211 10.4765 19.2176C10.5799 19.1142 10.6381 18.9738 10.6381 18.8275V1.17233C10.6381 1.026 10.5799 0.88567 10.4765 0.782202C10.373 0.678733 10.2327 0.620605 10.0863 0.620605ZM5.67255 6.68957C5.52622 6.68957 5.38589 6.7477 5.28242 6.85117C5.17895 6.95464 5.12082 7.09497 5.12082 7.24129V12.7585C5.12082 12.9049 5.17895 13.0452 5.28242 13.1487C5.38589 13.2521 5.52622 13.3103 5.67255 13.3103C5.81888 13.3103 5.95921 13.2521 6.06268 13.1487C6.16615 13.0452 6.22427 12.9049 6.22427 12.7585V7.24129C6.22427 7.09497 6.16615 6.95464 6.06268 6.85117C5.95921 6.7477 5.81888 6.68957 5.67255 6.68957ZM18.9139 5.0344C18.7676 5.0344 18.6273 5.09253 18.5238 5.19599C18.4203 5.29946 18.3622 5.4398 18.3622 5.58612V14.4137C18.3622 14.56 18.4203 14.7004 18.5238 14.8038C18.6273 14.9073 18.7676 14.9654 18.9139 14.9654C19.0603 14.9654 19.2006 14.9073 19.3041 14.8038C19.4075 14.7004 19.4657 14.56 19.4657 14.4137V5.58612C19.4657 5.4398 19.4075 5.29946 19.3041 5.19599C19.2006 5.09253 19.0603 5.0344 18.9139 5.0344ZM21.1208 3.93095C20.9745 3.93095 20.8342 3.98908 20.7307 4.09255C20.6272 4.19601 20.5691 4.33635 20.5691 4.48267V15.5172C20.5691 15.6635 20.6272 15.8038 20.7307 15.9073C20.8342 16.0108 20.9745 16.0689 21.1208 16.0689C21.2672 16.0689 21.4075 16.0108 21.511 15.9073C21.6144 15.8038 21.6726 15.6635 21.6726 15.5172V4.48267C21.6726 4.33635 21.6144 4.19601 21.511 4.09255C21.4075 3.98908 21.2672 3.93095 21.1208 3.93095ZM25.5346 7.24129C25.3883 7.24129 25.248 7.29942 25.1445 7.40289C25.041 7.50636 24.9829 7.64669 24.9829 7.79302V12.2068C24.9829 12.3531 25.041 12.4935 25.1445 12.5969C25.248 12.7004 25.3883 12.7585 25.5346 12.7585C25.6809 12.7585 25.8213 12.7004 25.9247 12.5969C26.0282 12.4935 26.0863 12.3531 26.0863 12.2068V7.79302C26.0863 7.64669 26.0282 7.50636 25.9247 7.40289C25.8213 7.29942 25.6809 7.24129 25.5346 7.24129ZM23.3277 5.58612C23.1814 5.58612 23.0411 5.64425 22.9376 5.74772C22.8341 5.85119 22.776 5.99152 22.776 6.13785V13.862C22.776 14.0083 22.8341 14.1486 22.9376 14.2521C23.0411 14.3556 23.1814 14.4137 23.3277 14.4137C23.4741 14.4137 23.6144 14.3556 23.7179 14.2521C23.8213 14.1486 23.8794 14.0083 23.8794 13.862V6.13785C23.8794 5.99152 23.8213 5.85119 23.7179 5.74772C23.6144 5.64425 23.4741 5.58612 23.3277 5.58612ZM27.7415 8.34474C27.5952 8.34474 27.4549 8.40287 27.3514 8.50634C27.2479 8.60981 27.1898 8.75014 27.1898 8.89647V11.1034C27.1898 11.2497 27.2479 11.39 27.3514 11.4935C27.4549 11.597 27.5952 11.6551 27.7415 11.6551C27.8878 11.6551 28.0282 11.597 28.1316 11.4935C28.2351 11.39 28.2932 11.2497 28.2932 11.1034V8.89647C28.2932 8.75014 28.2351 8.60981 28.1316 8.50634C28.0282 8.40287 27.8878 8.34474 27.7415 8.34474Z" fill="var(--main-color)" />
                        </svg>

                </button>
        )
}