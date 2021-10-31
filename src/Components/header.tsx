import React from "react";
import avatar from "../img/mocup_avatar.png";

const Header = () => {
    return (
        <div className="mx-auto border-b border-gray-300 w-full h-12">
            <div className="grid grid-cols-12 content-center">
                <div className="col-span-2 pt-1 ml-4 font-logo text-2xl font-bold text-blue-500 cursor-default">
                    DocSpot.
                </div>
                <div className="text-xs col-end-13 col-span-4 grid grid-cols-5">
                    <div className='pt-1 h-12 grid justify-items-center border-l border-gray-200 hover:text-blue-400 hover:shadow-inner'>
                        <svg className='h-5 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 64">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path
                                          d="M47.79,15a2.68,2.68,0,0,0-.57-.87L33.89.78A2.68,2.68,0,0,0,33,.21,2.59,2.59,0,0,0,32,0H2.67A2.66,2.66,0,0,0,0,2.67V61.33A2.66,2.66,0,0,0,2.67,64H45.33A2.66,2.66,0,0,0,48,61.33V16A2.59,2.59,0,0,0,47.79,15ZM34.67,9.1l4.23,4.23H34.67Zm8,49.57H5.33V5.33h24V16A2.68,2.68,0,0,0,32,18.67H42.67Z"/>
                                    <path
                                          d="M34.67,32H13.33a2.67,2.67,0,0,1,0-5.33H34.67a2.67,2.67,0,0,1,0,5.33Z"/>
                                    <path
                                          d="M21.33,21.33h-8a2.67,2.67,0,0,1,0-5.33h8a2.67,2.67,0,1,1,0,5.33Z"/>
                                    <path
                                          d="M34.67,42.67H13.33a2.67,2.67,0,0,1,0-5.34H34.67a2.67,2.67,0,0,1,0,5.34Z"/>
                                    <path
                                          d="M34.67,53.33H13.33a2.67,2.67,0,0,1,0-5.33H34.67a2.67,2.67,0,0,1,0,5.33Z"/>
                                </g>
                            </g>
                        </svg>
                        <p>Feed</p>
                    </div>
                    <div className='pt-1 h-12 grid justify-items-center border-l border-gray-200 hover:text-blue-400 hover:shadow-inner'>
                        <svg className='h-5 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 56">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path
                                          d="M56,13.33H53.33V8a8,8,0,0,0-8-8H18.67a8,8,0,0,0-8,8v5.33H8a8,8,0,0,0-8,8V48a8,8,0,0,0,8,8H56a8,8,0,0,0,8-8V21.33A8,8,0,0,0,56,13.33ZM16,8a2.68,2.68,0,0,1,2.67-2.67H45.33A2.68,2.68,0,0,1,48,8v5.33H16ZM8,18.67H56a2.67,2.67,0,0,1,2.67,2.66v5.34H5.33V21.33A2.67,2.67,0,0,1,8,18.67ZM29.33,32h5.34v2.67H29.33ZM56,50.67H8A2.68,2.68,0,0,1,5.33,48V32H24v2.67A5.33,5.33,0,0,0,29.33,40h5.34A5.33,5.33,0,0,0,40,34.67V32H58.67V48A2.68,2.68,0,0,1,56,50.67Z"/>
                                </g>
                            </g>
                        </svg>
                        <p>Jobs</p>
                    </div>
                    <div className='pt-1 h-12 grid justify-items-center border-l border-gray-200 hover:text-blue-400 hover:shadow-inner'>
                        <svg className='h-5 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path
                                          d="M56,0H8A8,8,0,0,0,0,8V61.33a2.68,2.68,0,0,0,1.55,2.43A2.75,2.75,0,0,0,2.67,64a2.67,2.67,0,0,0,1.73-.64L20.07,49.93A8,8,0,0,1,25.28,48H56a8,8,0,0,0,8-8V8A8,8,0,0,0,56,0Zm2.67,40A2.68,2.68,0,0,1,56,42.67H25.28a13.36,13.36,0,0,0-8.68,3.21L5.33,55.54V8A2.68,2.68,0,0,1,8,5.33H56A2.68,2.68,0,0,1,58.67,8Z"/>
                                    <path
                                          d="M45.33,15.69H18.67a2.67,2.67,0,1,0,0,5.33H45.33a2.67,2.67,0,1,0,0-5.33Z"/>
                                    <path
                                          d="M45.33,26.36H18.67a2.67,2.67,0,1,0,0,5.33H45.33a2.67,2.67,0,1,0,0-5.33Z"/>
                                </g>
                            </g>
                        </svg>
                        <p>Messages</p>
                    </div>
                    <div className='pt-1 h-12 grid justify-items-center border-l border-gray-200 hover:text-blue-400 hover:shadow-inner'>
                        <svg className='h-5 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.78 64">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path
                                          d="M29.39,58.66a8,8,0,0,1-5.77-2.46H17.23a13.38,13.38,0,0,0,24.32,0H35.16A8,8,0,0,1,29.39,58.66Z"/>
                                    <path
                                          d="M53.43,41V32.62A24.06,24.06,0,0,0,32.06,8.74V2.67a2.67,2.67,0,0,0-5.34,0V8.74A24.07,24.07,0,0,0,5.34,32.62V41c-.06,4.18-.67,7.2-5.34,7.2v5.35H58.78V48.18C54.11,48.18,53.49,45.16,53.43,41ZM48.09,37.5V48.18H10.69V32.62a18.7,18.7,0,0,1,37.4,0Z"/>
                                </g>
                            </g>
                        </svg>
                        <p>Notifications</p>
                    </div>
                    <div className='pt-0.5 h-12 grid justify-items-center'>
                        <img className="block h-8 rounded-full"
                             src={avatar}
                             alt="Woman's Face"/>
                        <span className='leading-3'>&#9660;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;