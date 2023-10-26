import { useContractRead } from "wagmi";
import { todoCA } from "./useAddTodo";
import todoABI from '@/constants/abi.json';


export interface displayTodoProps {
    functionName: string;
    args?: Array<any>;
}

const useDisplayTodo = ({functionName, args}: displayTodoProps) => {

    const data = useContractRead({
        address: todoCA,
        abi: todoABI,
        functionName,
        args,
        onError: (err) => {
           console.log({ err })
        }
    })

    return data || [];
}

export default useDisplayTodo;
