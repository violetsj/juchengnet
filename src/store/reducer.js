import { combineReducers } from "redux-immutable"
import Inforeducer from "@/components/main/Info/Inforeducer";
import Newsreducer from "@/components/main/News/Newsreducer";

import showListreducer from '@/components/main/showList/showListreducer';
import showCatereducer from '@/components/main/showCate/showCatereducer';
import Testreducer from "@/components/main/Test/Testreducer"
export default combineReducers({
    Inforeducer,
    Newsreducer,
    showListreducer,
    Testreducer,
    showCatereducer,
})
