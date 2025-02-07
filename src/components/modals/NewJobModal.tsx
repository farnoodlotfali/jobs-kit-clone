import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";

import { INPUT_TYPE } from "@/constants/inputTypes";
import { FormInputTypes } from "@/types/inputTypes";
import { IJob } from "@/types/schema/job";
import { fakeJob } from "@/utility/utils";
import { FormInputs } from "../form";
import Modal from "../Modal";

type NewJobModalProps = {
  open: boolean;
  onClose: () => void;
  handleNewJob: (job: IJob) => void;
};
type Inputs = {
  title: string;
  category: string;
};
const NewJobModal: React.FC<NewJobModalProps> = ({ onClose, open, handleNewJob }) => {
  const { handleSubmit, control, reset } = useForm<Inputs>();

  const Inputs: FormInputTypes[] = [
    {
      type: INPUT_TYPE.TEXT,
      name: "title",
      label: "عنوان",
      control: control,
      rules: { required: "وارد کردن عنوان ضروری است" },
    },
    {
      type: INPUT_TYPE.TEXT,
      name: "category",
      label: "دسته بندی",
      control: control,
      rules: { required: "وارد کردن دسته بندی ضروری است" },
    },
  ];

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleNewJob(fakeJob(data.title, data.category));
    onClose();
    reset();
  };

  return (
    <Modal onClose={onClose} open={open} maxWidth="xs">
      <Typography fontSize={21} fontWeight={600}>
        شغل جدید
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} mt={5}>
        <FormInputs inputs={Inputs} size={{ xs: 12 }} spacing={5} />

        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 5 }}>
          تایید
        </Button>
      </Box>
    </Modal>
  );
};

export default NewJobModal;
