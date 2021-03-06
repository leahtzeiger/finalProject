USE [lali_chani_project]
GO
/****** Object:  User [students\hitmachut]    Script Date: 06/08/2019 21:04:35 ******/
CREATE USER [students\hitmachut] FOR LOGIN [STUDENTS\hitmachut] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_accessadmin] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_securityadmin] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_ddladmin] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_backupoperator] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_datareader] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_denydatareader] ADD MEMBER [students\hitmachut]
GO
ALTER ROLE [db_denydatawriter] ADD MEMBER [students\hitmachut]
GO
/****** Object:  Table [dbo].[Bus]    Script Date: 06/08/2019 21:04:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bus](
	[busId] [int] NOT NULL,
	[busDescription] [nvarchar](20) NULL,
	[accompanierId] [int] NOT NULL,
	[numSeats] [int] NOT NULL,
 CONSTRAINT [PK_bus] PRIMARY KEY CLUSTERED 
(
	[busId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Stations]    Script Date: 06/08/2019 21:04:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Stations](
	[StationId] [int] NOT NULL,
	[StationName] [nvarchar](50) NULL,
	[lat] [numeric](18, 0) NOT NULL,
	[lng] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_stations_1] PRIMARY KEY CLUSTERED 
(
	[StationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Student]    Script Date: 06/08/2019 21:04:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Student](
	[StudentId] [int] IDENTITY(1,1) NOT NULL,
	[firstName] [nvarchar](15) NULL,
	[lastName] [nvarchar](15) NULL,
	[mail] [nvarchar](50) NULL,
	[emergencyPhone1] [varchar](11) NULL,
	[emergencyPhone2] [varchar](11) NULL,
 CONSTRAINT [PK_Student] PRIMARY KEY CLUSTERED 
(
	[StudentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StudentInBus]    Script Date: 06/08/2019 21:04:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentInBus](
	[StudentInBusId] [int] IDENTITY(30,1) NOT NULL,
	[busId] [int] NOT NULL,
	[studentId] [int] NOT NULL,
	[index] [int] NULL,
	[didCome] [bit] NULL,
 CONSTRAINT [PK_StudentInBus] PRIMARY KEY CLUSTERED 
(
	[StudentInBusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StudentInStation]    Script Date: 06/08/2019 21:04:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentInStation](
	[studentInStationId] [int] IDENTITY(1,1) NOT NULL,
	[fromDate] [date] NULL,
	[statioId] [int] NULL,
	[toDate] [date] NULL,
	[studentId] [int] NOT NULL,
 CONSTRAINT [PK_address] PRIMARY KEY CLUSTERED 
(
	[studentInStationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 06/08/2019 21:04:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[loginName] [nvarchar](20) NOT NULL,
	[password] [nvarchar](20) NOT NULL,
	[UserTypeId] [int] NOT NULL,
	[FirstName] [nvarchar](20) NULL,
	[PhoneNumber] [nvarchar](11) NULL,
	[LastName] [nvarchar](20) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserType]    Script Date: 06/08/2019 21:04:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserType](
	[TypeId] [int] NOT NULL,
	[TypeName] [nvarchar](50) NULL,
 CONSTRAINT [PK__UserType__516F03B529572725] PRIMARY KEY CLUSTERED 
(
	[TypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Bus]  WITH CHECK ADD  CONSTRAINT [FK_bus_User] FOREIGN KEY([accompanierId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Bus] CHECK CONSTRAINT [FK_bus_User]
GO
ALTER TABLE [dbo].[StudentInBus]  WITH CHECK ADD  CONSTRAINT [FK_StudentInBus_bus] FOREIGN KEY([busId])
REFERENCES [dbo].[Bus] ([busId])
GO
ALTER TABLE [dbo].[StudentInBus] CHECK CONSTRAINT [FK_StudentInBus_bus]
GO
ALTER TABLE [dbo].[StudentInBus]  WITH CHECK ADD  CONSTRAINT [FK_StudentInBus_Student] FOREIGN KEY([studentId])
REFERENCES [dbo].[Student] ([StudentId])
GO
ALTER TABLE [dbo].[StudentInBus] CHECK CONSTRAINT [FK_StudentInBus_Student]
GO
ALTER TABLE [dbo].[StudentInStation]  WITH CHECK ADD  CONSTRAINT [FK_address_Student1] FOREIGN KEY([studentId])
REFERENCES [dbo].[Student] ([StudentId])
GO
ALTER TABLE [dbo].[StudentInStation] CHECK CONSTRAINT [FK_address_Student1]
GO
ALTER TABLE [dbo].[StudentInStation]  WITH CHECK ADD  CONSTRAINT [FK_studentsAddress_stations] FOREIGN KEY([statioId])
REFERENCES [dbo].[Stations] ([StationId])
GO
ALTER TABLE [dbo].[StudentInStation] CHECK CONSTRAINT [FK_studentsAddress_stations]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_UserType] FOREIGN KEY([UserTypeId])
REFERENCES [dbo].[UserType] ([TypeId])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_UserType]
GO
