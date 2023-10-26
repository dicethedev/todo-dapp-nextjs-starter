'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import useAddTodo from '@/hooks/useAddTodo';
import useDisplayTodo from '@/hooks/useDisplayTodo';
import { 
    Stack,
    Text,
    Flex,
    Input,
    Button,
    Spinner,
    Textarea
} from '@chakra-ui/react';
import { FormData, getTodoDisplayInfo } from '@/constants/types';

const TodoUI = () => {

    const [formData, setFormData] = useState<FormData>({ title: '', description: '' });
   
      // useAddTodo Hook
      const { addTodoLoading, addTodoWrite, addTodowaitError, addTodowaitLoading, addTodowaitSuccess } = useAddTodo({
        functionName: 'addTodo',
        args: [formData.title, formData.description],
      });
    
      // useDisplayTodo Hook
      const { data: getTodoData } = useDisplayTodo({
        functionName: 'getTodos',
      });

      const todoList: getTodoDisplayInfo[] = Array.isArray(getTodoData) ? getTodoData : [];
     
      // function to handle the input form
      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // function to execute while sending the transaction to the blockchain, depending on if it succeeds or fails
      useEffect(() => {
        let rerun: boolean = true;
    
        if (addTodowaitError && rerun) {
          toast.error('Error adding to list!', {
            position: 'top-right',
            autoClose: 5000,
          });
        }
        if (addTodowaitSuccess && rerun) {
          toast.success('Added Successfully', {
            position: 'top-right',
            autoClose: 5000,
          });
        }
    
        return () => {
          rerun = false;
        };
      }, [addTodowaitError, addTodowaitSuccess, toast]);
    
      // function to handle adding a todo task
      const handleAddTodo = () => {
        addTodoWrite?.();
      };

    
  return (
   <Stack>
     <Text fontSize="24px"
      mb="20px" 
      textAlign="center"
      >
        Todo your tasks to the Blockchain!
      </Text>
      <Flex
      width="500px"
      margin= "0 auto"
      padding= "20px"
      backgroundColor="#333"
      borderRadius="10px"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
      textAlign= "center"
      fontFamily= "Arial, sans-serif"
      flexDir="column"
      >
        <Text fontSize="20px">Start Here</Text>

        <Flex mt="20px" flexDir="column">
          <Input
            type="text"
            placeholder="Enter Todo title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            flex="1"
            p="10px"
            border= "1px solid #ccc"
            borderRadius= "5px"
            required
          />

          <Textarea
            mt="20px"
            placeholder="Enter todo description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            flex="1"
            p="10px"
            border= "1px solid #ccc"
            borderRadius= "5px"
            required
          />


          <Button
            p="10px 20px"
            backgroundColor= "#007bff"
            color="#fff"
            border= "none"
            borderRadius= "5px"
            cursor= "pointer"
            mt="10px"
            onClick={handleAddTodo}
            disabled={addTodowaitLoading || addTodoLoading}
          >
            {addTodowaitLoading || addTodoLoading ? <Spinner /> : 'Add todo task'}
          </Button>
        </Flex>

  
        <Flex flexDir="column" mt="20px">
          {todoList?.map((e, i) => (
            <Flex 
             flexDir="column"
             alignItems="center" 
             backgroundColor= "#0000"
             border= "1px solid #ccc"
             borderRadius= "5px"
             marginBottom= "10px"
             p= "10px"
             key={i}
             >
              <Text>{e.title}</Text>
              <Text>{e.description}</Text>
              <Text>{e.status}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
   </Stack>
  );
};

export default TodoUI;