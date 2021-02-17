-- Create a new table called '[Work]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Work]', 'U') IS NOT NULL
DROP TABLE [dbo].[Work]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Work]
(
    [id_work] INT NOT NULL IDENTITY(1,1) PRIMARY KEY, 
    [id_material] INT NULL,
    [id_vehicle] INT NULL,
    [id_responsable] INT NULL,
    [id_tools] INT NULL,
    [description] text NULL,
    [created_at] date NOT NULL,
    [updated_at] date NOT NULL
);
GO

-- Create a new table called '[Agreement]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Agreement]', 'U') IS NOT NULL
DROP TABLE [dbo].[Agreement]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Agreement]
(
    [id_agreement] INT NOT NULL IDENTITY(1,1) PRIMARY KEY, 
    [id_contractor] INT NOT NULL,
    [id_work] INT NOT NULL,
    [id_location] INT NOT NULL,
    [loc_reference] text NULL,
    [date_begin] date not null,
    [date_end] date not null,
    [description] text null 
);
GO


-- Create a new table called '[Contractor]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Contractor]', 'U') IS NOT NULL
DROP TABLE [dbo].[Contractor]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Contractor]
(
    [id_contractor] INT NOT NULL IDENTITY(1,1) PRIMARY KEY, 
    [id_ubication] INT NOT NULL,
    [ruc] NVARCHAR(50) NOT NULL,
    [business_name] NVARCHAR(50) NOT NULL,
    [description] text NULL
);
GO

-- Create a new table called '[Location]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Location]', 'U') IS NOT NULL
DROP TABLE [dbo].[Location]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Location]
(
    [id_location] INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    [province] NVARCHAR(25) NOT NULL,
    [canton] NVARCHAR(25) NOT NULL,
    [parish] NVARCHAR(25) NOT NULL
);
GO
