import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import BusinessIcon from "@mui/icons-material/Business";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import WorkIcon from "@mui/icons-material/Work";
import { Avatar, Card, Divider, Grid2, Stack, Typography } from "@mui/material";

import { IJob } from "@/types/schema/job";
import { MuiIconType } from "@/types/schema/muiIcon";
import { handleCapitalize, handleDate } from "@/utility/utils";

type JObInfoItemProps = {
  title: string | null;
  Icon: MuiIconType;
};

const JObInfoItem: React.FC<JObInfoItemProps> = ({ title, Icon }) => {
  return (
    <Grid2 size={{ xs: 6 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="start"
        gap={1}
        color="text.secondary"
      >
        <Icon
          sx={{
            fontSize: 14,
          }}
        />
        <Typography
          lineHeight={1}
          fontSize={12}
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {handleCapitalize(!!title ? title : "not specified")}
        </Typography>
      </Stack>
    </Grid2>
  );
};

type JobCardProps = {
  job: IJob;
};
const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card sx={{ direction: "rtl", height: "100%" }}>
      <Stack alignItems="start" p={6}>
        <Avatar
          src={job.company.imageURL}
          variant="rounded"
          sx={{ bgcolor: "secondary.main", height: 48, width: 48 }}
        >
          <BusinessIcon />
        </Avatar>
        <Typography mt={5} fontWeight={600}>
          {job.title}
        </Typography>
        <Typography fontWeight={600} color="secondary.main">
          {job.company.name}
        </Typography>
        <Typography fontSize={12} fontWeight={500} color="text.secondary">
          Posted date: {handleDate(job.datePosted)}
        </Typography>
      </Stack>
      <Divider />
      <Stack p={6}>
        <Grid2 container columnSpacing={2} rowSpacing={8}>
          <JObInfoItem Icon={WorkIcon} title={job.jobType} />
          <JObInfoItem Icon={PersonAddAltTwoToneIcon} title={null} />
          <JObInfoItem Icon={AccessTimeTwoToneIcon} title={job.employmentType} />
          <JObInfoItem Icon={PublicTwoToneIcon} title={job.location} />
          <JObInfoItem Icon={CategoryRoundedIcon} title={job.subCategory.name} />
          <JObInfoItem Icon={CategoryRoundedIcon} title={job.category.name} />
        </Grid2>
      </Stack>
    </Card>
  );
};

export default JobCard;
