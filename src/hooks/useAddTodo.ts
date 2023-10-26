import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import todoABI from '@/constants/abi.json';

export interface addProps {
    functionName: string;
    args?: Array<any>;
    value?: bigint
}

//todo-contract
export const todoCA = "0xDf884d362E6EB5A6A26576AD5ad4677faC5A0364"

const useAddTodo = ({functionName, args, value}: addProps) => {
    
    const {config} = usePrepareContractWrite({
        address: todoCA,
        abi: todoABI,
        functionName,
        args,
        value
    })

    const { data: addTodoData, isLoading: addTodoLoading, write: addTodoWrite } = useContractWrite(config);

    const { isError: addTodowaitError, isSuccess: addTodowaitSuccess, isLoading: addTodowaitLoading } = useWaitForTransaction({
        hash: addTodoData?.hash
    })

    return { 
        addTodoLoading, 
        addTodoWrite, 
        addTodowaitError, 
        addTodowaitSuccess, 
        addTodowaitLoading
    };

}

export default useAddTodo;




