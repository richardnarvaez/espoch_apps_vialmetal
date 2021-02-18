
-- Create a new table called '[accounts]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[accounts]', 'U') IS NOT NULL
DROP TABLE [dbo].[accounts]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[accounts]
(
    [id] INT IDENTITY(1,1) NOT NULL, -- PK
    [compound_id] NVARCHAR(255) NOT NULL,
    [user_id] INT NOT NULL,
    [provider_type] NVARCHAR(255) NOT NULL,
    [provider_id] NVARCHAR(255) NOT NULL,
    [provider_account_id] NVARCHAR(255) NOT NULL,
    [refresh_token] TEXT NULL,
    [access_token] TEXT NULL,
    [access_token_expires] DATETIME NULL,
    [created_at] DATETIME NOT NULL DEFAULT GETDATE(),
    [updated_at] DATETIME NOT NULL DEFAULT GETDATE()
    -- Specify more columns here
);
GO

-- Create a new table called '[sessions]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[sessions]', 'U') IS NOT NULL
DROP TABLE [dbo].[sessions]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[sessions]
(
    [id] INT IDENTITY(1,1) NOT NULL, -- PK
    [user_id] INT NOT NULL,
    [expires] DATETIME NOT NULL,
    [session_token] NVARCHAR(255) NOT NULL,
    [access_token] NVARCHAR(255) NOT NULL,
    [created_at] DATETIME NOT NULL DEFAULT GETDATE(),
    [updated_at] DATETIME NOT NULL DEFAULT GETDATE()
    -- Specify more columns here
);
GO
-- Create a new table called '[users]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[users]', 'U') IS NOT NULL
DROP TABLE [dbo].[users]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[users]
(
    [id_user] INT IDENTITY(1,1) NOT NULL, -- PK
    [name] NVARCHAR(255) NULL,
    [email] NVARCHAR(255) NULL,
    [email_verified] DATETIME NULL,
    [image] NVARCHAR(255) NULL,
    [roles] NVARCHAR(255) NULL,
    [created_at] DATETIME NOT NULL DEFAULT GETDATE(),
    [updated_at] DATETIME NOT NULL DEFAULT GETDATE()
    -- Specify more columns here
);
GO
ALTER TABLE users 
    ADD CONSTRAINT PK_Users PRIMARY KEY NONCLUSTERED(id_user)
GO
-- Create a new table called '[verification_requests]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[verification_requests]', 'U') IS NOT NULL
DROP TABLE [dbo].[verification_requests]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[verification_requests]
(
    [id] INT IDENTITY(1,1) NOT NULL, -- PK
    [identifier] NVARCHAR(255) NOT NULL,
    [token] NVARCHAR(255) NOT NULL,
    [expires] DATETIME NOT NULL,
    [created_at] DATETIME NOT NULL DEFAULT GETDATE(),
    [updated_at] DATETIME NOT NULL DEFAULT GETDATE()
    -- Specify more columns here
);
GO

CREATE UNIQUE INDEX compound_id
  ON accounts(compound_id);
GO
CREATE INDEX provider_account_id
  ON accounts(provider_account_id);
GO
CREATE INDEX provider_id
  ON accounts(provider_id);
GO
CREATE INDEX user_id
  ON accounts(user_id);
GO
CREATE UNIQUE INDEX session_token
  ON [sessions](session_token);
GO
CREATE UNIQUE INDEX access_token
  ON [sessions](access_token);
GO
CREATE UNIQUE INDEX email
  ON users(email);
GO
CREATE UNIQUE INDEX token
  ON verification_requests(token);
GO
-- Create a new table called '[contractors]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[contractors]', 'U') IS NOT NULL
DROP TABLE [dbo].[contractors]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[contractors]
(
    [id_contractor] INT IDENTITY(1,1) NOT NULL, --PK
    [ruc] NVARCHAR(50) NOT NULL, --U
    [business_name] NVARCHAR(50) NOT NULL,
    [description] NVARCHAR(100) NULL
    -- Specify more columns here
);
GO
ALTER TABLE contractors
    ADD CONSTRAINT PK_Contractor PRIMARY KEY NONCLUSTERED (id_contractor)
GO
ALTER TABLE contractors 
    ADD CONSTRAINT U_RucContractor UNIQUE NONCLUSTERED (ruc)
GO

--------------------------------------------------------------------------
-- Create a new table called '[agreements]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[agreements]', 'U') IS NOT NULL
DROP TABLE [dbo].[agreements]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[agreements]
(
    [id_agreement] INT IDENTITY(1,1) NOT NULL, -- Primary Key column
    [id_contractor] INT NOT NULL,
    [location] NVARCHAR(50) NOT NULL,
    [location_reference] NVARCHAR(50) NULL,
    [description] NVARCHAR(50) NULL,
    [date_begin] DATETIME NOT NULL,
    [date_end] DATETIME NOT NULL
    -- Specify more columns here
);
GO
ALTER TABLE agreements
    ADD CONSTRAINT PK_Agreement PRIMARY KEY NONCLUSTERED (id_agreement)
GO
ALTER TABLE agreements
    ADD CONSTRAINT FK_ContractorAgreement FOREIGN KEY (id_contractor) REFERENCES contractors(id_contractor)
GO

--------------------------------------------------------------------------
-- Create a new table called '[works]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[works]', 'U') IS NOT NULL
DROP TABLE [dbo].[works]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[works]
(
    [id_work] INT NOT NULL, -- PK
    [id_user] INT NOT NULL, -- FK
    [id_agreement] INT NOT NULL, -- FK
    [description] NVARCHAR(50) NULL,
    [created_at] DATETIME NOT NULL DEFAULT GETDATE(),
    [updated_at] DATETIME NOT NULL DEFAULT GETDATE(),
    [finished_at] DATETIME NOT NULL DEFAULT GETDATE(),
    [price_work] MONEY NULL,
    [status] CHAR(1) NOT NULL,
    -- Specify more columns here
);
GO
ALTER TABLE works
    ADD CONSTRAINT PK_Work PRIMARY KEY NONCLUSTERED(id_work)
GO
ALTER TABLE works
    ADD CONSTRAINT FK_UserWork FOREIGN KEY (id_user) REFERENCES users(id_user)
GO
ALTER TABLE works
    ADD CONSTRAINT FK_AgreementWork FOREIGN KEY (id_agreement) REFERENCES agreements(id_agreement)
GO
--------------------------------------------------------------------------
-- Create a new table called '[materials]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[materials]', 'U') IS NOT NULL
DROP TABLE [dbo].[materials]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[materials]
(
    [id_material] INT NOT NULL, -- PK
    [name] NVARCHAR(50) NOT NULL,
    [image] NVARCHAR(255) NULL,
    [quantity] INT NOT NULL,
    [price_liter] MONEY NOT NULL,
    -- Specify more columns here
);
GO
ALTER TABLE materials
    ADD CONSTRAINT PK_Material PRIMARY KEY NONCLUSTERED (id_material)
GO

--------------------------------------------------------------------------
-- Create a new table called '[vehicles]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[vehicles]', 'U') IS NOT NULL
DROP TABLE [dbo].[vehicles]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[vehicles]
(
    [id_vehicle] INT NOT NULL, -- PK
    [license] NVARCHAR(50) NOT NULL, -- U
    [name] NVARCHAR(50) NOT NULL,
    [image] NVARCHAR(255) NULL,
    [mileage] INT NOT NULL,
    [price_km] MONEY NOT NULL,
    [status] CHAR(1) NOT NULL
    -- Specify more columns here
);
GO
ALTER TABLE vehicles
    ADD CONSTRAINT PK_Vehicle PRIMARY KEY NONCLUSTERED(id_vehicle)
GO
ALTER TABLE vehicles
    ADD CONSTRAINT U_LicenseVehicle UNIQUE NONCLUSTERED(license)
GO
--------------------------------------------------------------------------
-- Create a new table called '[tools]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[tools]', 'U') IS NOT NULL
DROP TABLE [dbo].[tools]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[tools]
(
    [id_tool] INT NOT NULL, -- PK
    [name] NVARCHAR(50) NOT NULL,
    [image] NVARCHAR(255) NULL,
    [quantity] INT NOT NULL,
    [price_use] MONEY NOT NULL,
    [status] CHAR(1) NOT NULL
    -- Specify more columns here
);
GO
ALTER TABLE tools
    ADD CONSTRAINT PK_Tools PRIMARY KEY NONCLUSTERED(id_tool)
GO
--------------------------------------------------------------------------
-- Create a new table called '[work_materials]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[work_materials]', 'U') IS NOT NULL
DROP TABLE [dbo].[work_materials]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[work_materials]
(
    [id_work_material] INT NOT NULL, -- PK
    [id_work] INT NOT NULL, -- FK
    [id_material] INT NOT NULL, -- FK
    [material_begin] INT NOT NULL,
    [material_end] INT NOT NULL,
    [date] DATETIME NOT NULL DEFAULT GETDATE()
    -- Specify more columns here
);
GO
ALTER TABLE work_materials
    ADD CONSTRAINT PK_WorkMaterials PRIMARY KEY NONCLUSTERED(id_work_material)
GO
ALTER TABLE work_materials
    ADD CONSTRAINT FK_Work_WorkMaterials FOREIGN KEY (id_work) REFERENCES works(id_work)
GO
ALTER TABLE work_materials
    ADD CONSTRAINT FK_Material_WorkMaterials FOREIGN KEY (id_material) REFERENCES materials(id_material)
GO
--------------------------------------------------------------------------
-- Create a new table called '[work_vehicles]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[work_vehicles]', 'U') IS NOT NULL
DROP TABLE [dbo].[work_vehicles]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[work_vehicles]
(
    [id_work_vehicle] INT NOT NULL, -- PK
    [id_work] INT NOT NULL, -- FK
    [id_vehicle] INT NOT NULL, -- FK
    [km_begin] INT NOT NULL,
    [km_end] INT NOT NULL,
    [date] DATETIME NOT NULL DEFAULT GETDATE()
    -- Specify more columns here
);
GO
ALTER TABLE work_vehicles
    ADD CONSTRAINT PK_WorkVehicles PRIMARY KEY NONCLUSTERED(id_work_vehicle)
GO
ALTER TABLE work_vehicles
    ADD CONSTRAINT FK_Work_WorkVehicles FOREIGN KEY(id_work) REFERENCES works(id_work)
GO
ALTER TABLE work_vehicles
    ADD CONSTRAINT FK_Vehicle_WorkVehicles FOREIGN KEY(id_vehicle) REFERENCES vehicles(id_vehicle)
GO
--------------------------------------------------------------------------
-- Create a new table called '[work_tools]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[work_tools]', 'U') IS NOT NULL
DROP TABLE [dbo].[work_tools]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[work_tools]
(
    [id_work_tool] INT NOT NULL, -- PK
    [id_work] INT NOT NULL, -- FK
    [id_tool] INT NOT NULL, -- FK
    [tool_begin] INT NOT NULL,
    [tool_end] INT NOT NULL,
    [date] DATETIME NOT NULL DEFAULT GETDATE()
    -- Specify more columns here
);
GO
ALTER TABLE work_tools
    ADD CONSTRAINT PK_WorkTools PRIMARY KEY NONCLUSTERED(id_work_tool)
GO
ALTER TABLE work_tools 
    ADD CONSTRAINT FK_Work_WorkTools FOREIGN KEY(id_work) REFERENCES works(id_work)
GO
ALTER TABLE work_tools
    ADD CONSTRAINT FK_Tool_WorkTools FOREIGN KEY(id_tool) REFERENCES tools(id_tool)
GO